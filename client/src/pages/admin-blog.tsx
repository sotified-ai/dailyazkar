import { useState } from "react";
import { useLocation } from "wouter";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function AdminBlog() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      toast({ title: "Admin Password Required", variant: "destructive" });
      return;
    }
    if (!title || !content || content === "<p><br></p>") {
      toast({ title: "Title and Content are required", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (image) {
        formData.append("image", image);
      }

      const response = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${password}`
        },
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to publish blog. Check password.");
      }

      const result = await response.json();
      toast({ 
        title: "Blog Published Successfully!", 
        description: "SEO tags auto-generated based on heading." 
      });
      
      // Navigate to the newly created blog post
      setLocation(`/blog/${result.slug}`);
    } catch (error: any) {
      toast({
        title: "Submission Error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-24 px-4 bg-background flex justify-center">
      <Card className="w-full max-w-4xl shadow-xl border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="text-center space-y-2 border-b border-border/50 pb-8">
          <CardTitle className="text-4xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: 'var(--primary-gradient)' }}>
            Admin CMS Studio
          </CardTitle>
          <CardDescription className="text-lg">
            Write your blog. We handle the SEO magically.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Authenticator */}
            <div className="space-y-2 bg-muted/30 p-4 rounded-xl border border-border/40">
              <Label htmlFor="password" className="text-primary font-semibold flex items-center gap-2">
                <i className="fas fa-lock"></i> Admin Master Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter the secure admin password defined in your environment (.env)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-background/50 border-primary/20 focus:border-primary"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Heading */}
              <div className="space-y-3">
                <Label htmlFor="title" className="text-lg font-semibold">Blog Heading</Label>
                <Input
                  id="title"
                  placeholder="e.g. The Virtues of Morning Zikr"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-lg py-6"
                />
                <p className="text-xs text-muted-foreground">
                  <i className="fas fa-magic text-primary/70 mr-1"></i>
                  This will automatically generate the <b>URL Slug</b>, <b>SEO Title</b>, and <b>SEO Keywords</b>.
                </p>
              </div>

              {/* Cover Image */}
              <div className="space-y-3">
                <Label htmlFor="image" className="text-lg font-semibold">Cover Image (Optional)</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                  className="file:bg-primary file:text-primary-foreground file:border-0 file:rounded-md file:px-4 file:py-2 file:mr-4 file:hover:bg-primary/90 cursor-pointer py-3 h-auto"
                />
                <p className="text-xs text-muted-foreground">
                  <i className="fas fa-upload text-primary/70 mr-1"></i>
                  Image will be securely uploaded to your `public/uploads/` directory on the server.
                </p>
              </div>
            </div>

            {/* Rich Text Editor */}
            <div className="space-y-3">
              <Label className="text-lg font-semibold mb-2 flex justify-between items-end">
                <span>Blog Content</span>
                <span className="text-xs font-normal text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
                  Rich Text Markdown Supported
                </span>
              </Label>
              <div className="bg-background rounded-xl overflow-hidden border border-border">
                <ReactQuill 
                  theme="snow" 
                  value={content} 
                  onChange={setContent} 
                  className="h-80 pb-10 sm:pb-12 text-foreground"
                  placeholder="Write your beautiful content here..."
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                <i className="fas fa-magic text-primary/70 mr-1"></i>
                The first 150 characters will be automatically extracted and stripped of code to build your <b>SEO Meta Description</b> snippet for Google.
              </p>
            </div>

            <div className="pt-6 border-t border-border/50 flex justify-end">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full sm:w-auto text-lg px-10 py-6 rounded-xl gap-3 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                style={{ background: 'var(--primary-gradient)' }}
              >
                {isSubmitting ? (
                  <><i className="fas fa-spinner fa-spin"></i> Publishing & Generating SEO...</>
                ) : (
                  <><i className="fas fa-paper-plane"></i> Publish Blog Now</>
                )}
              </Button>
            </div>
            
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
