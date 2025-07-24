const BASE_IMAGE_PATH = 'azkar/';
const AZKAR_CATEGORIES = {
    MANZIL: 'manzil/',
    SUBHA: 'subha/',
    SHAM: 'sham/',
    QURANIDUA: 'quranidua/'
};

const IMAGE_COUNTS = {
    [AZKAR_CATEGORIES.MANZIL]: 13,
    [AZKAR_CATEGORIES.SUBHA]: 7,
    [AZKAR_CATEGORIES.SHAM]: 10,
    [AZKAR_CATEGORIES.QURANIDUA]: 8
};

let currentAzkarCategory = AZKAR_CATEGORIES.MANZIL;
if (document.body.dataset.azkarCategory) {
    const categoryFromHtml = document.body.dataset.azkarCategory;
    const foundCategory = Object.values(AZKAR_CATEGORIES).find(cat => cat.replace('/', '') === categoryFromHtml);
    if (foundCategory) {
        currentAzkarCategory = foundCategory;
    } else {
        console.warn(`Unknown data-azkar-category: "${categoryFromHtml}". Defaulting to ${AZKAR_CATEGORIES.MANZIL}`);
    }
}

let currentImageIndex = 0;
let messageBox, loader, imageSlitsGrid, expandedImageModal, modalImage, modalCloseButton, modalPrevButton, modalNextButton;
let azkarInput, azkarSearchButton, azkarLoader, azkarResponseArea, azkarResponseText;
let quranSearchInput, quranSearchButton, quranLoader, quranResponseArea, quranResponseText;
let surahListContainer, quranTextDisplay;

const QURAN_SURAHS = [
    { number: 1, name: "Al-Fatiha", arabic: "الفاتحة" },
    // ... (same as original, omitted for brevity)
    { number: 74, name: "Al-Muddaththir", arabic: "المدثر", textFilePath: './quran_texts/surah_74.js' },
    // ... (remaining surahs)
];

function showMessage(message, type = 'info') {
    messageBox.textContent = message;
    messageBox.className = `message-box ${type} p-4 rounded-lg shadow-lg`;
    messageBox.style.display = 'block';
    setTimeout(() => messageBox.style.display = 'none', 5000);
}

function getCurrentImageFilenames() {
    const count = IMAGE_COUNTS[currentAzkarCategory] || 0;
    return Array.from({ length: count }, (_, i) => `image-${i + 1}.jpg`);
}

function renderImageSlits() {
    if (!imageSlitsGrid) return;
    loader.style.display = 'block';
    imageSlitsGrid.innerHTML = '';
    const filenames = getCurrentImageFilenames();

    if (!filenames.length) {
        showMessage(`No images found for category: ${currentAzkarCategory.replace('/', '')}.`, 'error');
        loader.style.display = 'none';
        return;
    }

    filenames.forEach((filename, index) => {
        const slitItem = document.createElement('div');
        slitItem.classList.add('option');
        slitItem.dataset.index = index;
        slitItem.style.backgroundImage = `url(${BASE_IMAGE_PATH}${currentAzkarCategory}${filename})`;
        slitItem.innerHTML = `
            <div class="shadow"></div>
            <div class="label">
                <div class="icon"><i class="fas fa-image"></i></div>
                <div class="info">
                    <div class="main">Image ${index + 1}</div>
                    <div class="sub">Click to expand</div>
                </div>
            </div>
        `;
        slitItem.addEventListener('click', () => {
            $('.option').removeClass('active');
            $(slitItem).addClass('active');
            openImageModal(index);
        });
        imageSlitsGrid.appendChild(slitItem);
    });
    loader.style.display = 'none';
    showMessage(`Image gallery for ${currentAzkarCategory.replace('/', '')} loaded successfully.`, 'success');
    $('.option').first().addClass('active');
}

function openImageModal(index) {
    currentImageIndex = index;
    const filenames = getCurrentImageFilenames();
    modalImage.src = `${BASE_IMAGE_PATH}${currentAzkarCategory}${filenames[currentImageIndex]}`;
    modalImage.alt = `Expanded Image ${currentImageIndex + 1} from ${currentAzkarCategory.replace('/', '')}`;
    expandedImageModal.classList.add('active');
    updateModalNavigationButtons();
}

function closeImageModal() {
    expandedImageModal.classList.remove('active');
    modalImage.src = '';
}

function modalNextImage() {
    const filenames = getCurrentImageFilenames();
    if (currentImageIndex < filenames.length - 1) {
        openImageModal(currentImageIndex + 1);
    }
}

function modalPrevImage() {
    if (currentImageIndex > 0) {
        openImageModal(currentImageIndex - 1);
    }
}

function updateModalNavigationButtons() {
    const filenames = getCurrentImageFilenames();
    modalPrevButton.disabled = currentImageIndex <= 0;
    modalNextButton.disabled = currentImageIndex >= filenames.length - 1;
}

async function getLLMExplanation(prompt, responseArea, loaderElement, buttonElement) {
    loaderElement.style.display = 'block';
    responseArea.classList.add('hidden');
    responseArea.querySelector('p').textContent = '';
    buttonElement.disabled = true;

    try {
        const response = await fetch('https://api.example.com/gemini', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt })
        });
        const result = await response.json();
        responseArea.querySelector('p').textContent = result.text || 'No response received.';
        responseArea.classList.remove('hidden');
    } catch (error) {
        responseArea.querySelector('p').textContent = `Error: ${error.message}`;
        responseArea.classList.remove('hidden');
    } finally {
        loaderElement.style.display = 'none';
        buttonElement.disabled = false;
    }
}

function renderSurahList() {
    if (!surahListContainer) return;
    surahListContainer.innerHTML = '';
    QURAN_SURAHS.forEach(surah => {
        const surahItem = document.createElement('div');
        surahItem.classList.add('surah-item', 'bg-white', 'dark:bg-gray-700', 'p-4', 'rounded-lg', 'shadow', 'cursor-pointer', 'hover:bg-emerald-100', 'dark:hover:bg-emerald-600');
        surahItem.dataset.surahNumber = surah.number;
        surahItem.innerHTML = `
            <div>${surah.number}. ${surah.name}</div>
            <div dir="rtl">${surah.arabic}</div>
        `;
        surahItem.addEventListener('click', () => {
            surahListContainer.querySelectorAll('.surah-item').forEach(item => item.classList.remove('selected', 'bg-emerald-100', 'dark:bg-emerald-600'));
            surahItem.classList.add('selected', 'bg-emerald-100', 'dark:bg-emerald-600');
            displaySurahText(surah.number);
        });
        surahListContainer.appendChild(surahItem);
    });
    showMessage('Surah list loaded. Click a Surah to view its text.', 'info');
}

async function displaySurahText(surahNumber) {
    if (!quranTextDisplay) return;
    quranTextDisplay.classList.remove('hidden');
    quranTextDisplay.innerHTML = '<p class="text-center text-gray-500">Loading...</p>';
    quranTextDisplay.setAttribute('dir', 'rtl');

    const selectedSurah = QURAN_SURAHS.find(s => s.number === surahNumber);
    if (selectedSurah && selectedSurah.textFilePath) {
        try {
            const module = await import(selectedSurah.textFilePath);
            const verses = module.SURAH_TEXT.split('\n').filter(line => line.trim());
            quranTextDisplay.innerHTML = verses.map(verse => `<div class="quran-verse p-2">${verse.trim()}</div>`).join('');
            showMessage(`Displaying Surah ${selectedSurah.name} (${surahNumber}).`, 'success');
        } catch (error) {
            quranTextDisplay.innerHTML = `<p class="text-center text-red-500">Failed to load text for Surah ${selectedSurah.name}.</p>`;
            showMessage(`Error loading text for Surah ${selectedSurah.name}.`, 'error');
        }
    } else {
        quranTextDisplay.innerHTML = `<p class="text-center text-gray-700">Text for ${selectedSurah?.name || `Surah ${surahNumber}`} is not available.</p>`;
        showMessage(`Text for ${selectedSurah?.name || `Surah ${surahNumber}`} not available.`, 'info');
    }
}

window.onload = () => {
    messageBox = document.getElementById('message-box');
    imageSlitsGrid = document.getElementById('image-slits-grid');
    if (imageSlitsGrid) {
        loader = document.getElementById('loader');
        expandedImageModal = document.getElementById('expanded-image-modal');
        modalImage = document.getElementById('modal-image');
        modalCloseButton = document.getElementById('modal-close-button');
        modalPrevButton = document.getElementById('modal-prev-button');
        modalNextButton = document.getElementById('modal-next-button');
        renderImageSlits();
        modalCloseButton.addEventListener('click', closeImageModal);
        modalPrevButton.addEventListener('click', modalPrevImage);
        modalNextButton.addEventListener('click', modalNextImage);
    }

    azkarInput = document.getElementById('azkar-input');
    if (azkarInput) {
        azkarSearchButton = document.getElementById('azkar-search-button');
        azkarLoader = document.getElementById('azkar-loader');
        azkarResponseArea = document.getElementById('azkar-response-area');
        azkarResponseText = azkarResponseArea.querySelector('p');
        azkarSearchButton.addEventListener('click', () => {
            const input = azkarInput.value.trim();
            if (input) {
                getLLMExplanation(`Explain the Islamic Azkar: "${input}"`, azkarResponseArea, azkarLoader, azkarSearchButton);
            } else {
                azkarResponseText.textContent = "Please enter an Azkar or topic.";
                azkarResponseArea.classList.remove('hidden');
            }
        });
        azkarInput.addEventListener('keypress', e => e.key === 'Enter' && azkarSearchButton.click());
    }

    quranSearchInput = document.getElementById('quran-search-input');
    if (quranSearchInput) {
        quranSearchButton = document.getElementById('quran-search-button');
        quranLoader = document.getElementById('quran-loader');
        quranResponseArea = document.getElementById('quran-response-area');
        quranResponseText = quranResponseArea.querySelector('p');
        surahListContainer = document.getElementById('surah-list-container');
        quranTextDisplay = document.getElementById('quran-text-display');
        renderSurahList();
        quranSearchButton.addEventListener('click', () => {
            const input = quranSearchInput.value.trim();
            if (input) {
                getLLMExplanation(`Explain the Quranic topic or verse: "${input}"`, quranResponseArea, quranLoader, quranSearchButton);
            } else {
                quranResponseText.textContent = "Please enter a Quranic topic or verse.";
                quranResponseArea.classList.remove('hidden');
            }
        });
        quranSearchInput.addEventListener('keypress', e => e.key === 'Enter' && quranSearchButton.click());
    }

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        darkModeToggle.innerHTML = document.body.classList.contains('dark') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
};