
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Save, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Admin = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // Simple password - in a real app, this would be more secure
  const ADMIN_PASSWORD = 'mwanyakwerigeria2024';

  const [imageLinks, setImageLinks] = useState({
    heroImage: localStorage.getItem('heroImage') || '',
    aboutImage: localStorage.getItem('aboutImage') || '',
    servicesImage: localStorage.getItem('servicesImage') || '',
    galleryImages: JSON.parse(localStorage.getItem('galleryImages') || '{}'),
    testimonialImages: JSON.parse(localStorage.getItem('testimonialImages') || '{}'),
  });

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: "Access Granted",
        description: "Welcome to the admin panel",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password",
        variant: "destructive",
      });
    }
  };

  const handleSave = () => {
    // Save to localStorage
    localStorage.setItem('heroImage', imageLinks.heroImage);
    localStorage.setItem('aboutImage', imageLinks.aboutImage);
    localStorage.setItem('servicesImage', imageLinks.servicesImage);
    localStorage.setItem('galleryImages', JSON.stringify(imageLinks.galleryImages));
    localStorage.setItem('testimonialImages', JSON.stringify(imageLinks.testimonialImages));
    
    toast({
      title: "Images Updated",
      description: "All image links have been saved successfully",
    });
  };

  const updateGalleryImage = (index: number, url: string) => {
    setImageLinks(prev => ({
      ...prev,
      galleryImages: {
        ...prev.galleryImages,
        [index]: url
      }
    }));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Admin Access</CardTitle>
            <CardDescription className="text-center">
              Enter password to manage website images
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <Button onClick={handleLogin} className="w-full">
              Access Admin Panel
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Website Image Manager</h1>
          <p className="text-muted-foreground">Update all website images from here</p>
        </div>

        <div className="grid gap-6">
          {/* Main Page Images */}
          <Card>
            <CardHeader>
              <CardTitle>Main Page Images</CardTitle>
              <CardDescription>Hero, About, and Services section images</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="heroImage">Hero Section Image</Label>
                <Input
                  id="heroImage"
                  value={imageLinks.heroImage}
                  onChange={(e) => setImageLinks(prev => ({ ...prev, heroImage: e.target.value }))}
                  placeholder="https://example.com/hero-image.jpg"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="aboutImage">About Section Image</Label>
                <Input
                  id="aboutImage"
                  value={imageLinks.aboutImage}
                  onChange={(e) => setImageLinks(prev => ({ ...prev, aboutImage: e.target.value }))}
                  placeholder="https://example.com/about-image.jpg"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="servicesImage">Services Section Image</Label>
                <Input
                  id="servicesImage"
                  value={imageLinks.servicesImage}
                  onChange={(e) => setImageLinks(prev => ({ ...prev, servicesImage: e.target.value }))}
                  placeholder="https://example.com/services-image.jpg"
                />
              </div>
            </CardContent>
          </Card>

          {/* Gallery Images */}
          <Card>
            <CardHeader>
              <CardTitle>Gallery Images</CardTitle>
              <CardDescription>Update specific gallery item images</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                <div key={index} className="space-y-2">
                  <Label htmlFor={`gallery-${index}`}>Gallery Image {index + 1}</Label>
                  <Input
                    id={`gallery-${index}`}
                    value={imageLinks.galleryImages[index] || ''}
                    onChange={(e) => updateGalleryImage(index, e.target.value)}
                    placeholder={`https://example.com/gallery-image-${index + 1}.jpg`}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center">
          <Button onClick={handleSave} className="px-8">
            <Save className="mr-2 h-4 w-4" />
            Save All Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
