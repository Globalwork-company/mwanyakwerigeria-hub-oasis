
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Save, Eye, EyeOff, Upload, X } from 'lucide-react';
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

  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File | null}>({});

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

  const handleFileUpload = (key: string, file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid File",
        description: "Please upload an image file",
        variant: "destructive",
      });
      return;
    }

    // Create object URL for preview
    const objectUrl = URL.createObjectURL(file);
    
    // Update the image links state
    if (key.startsWith('gallery-')) {
      const index = parseInt(key.split('-')[1]);
      setImageLinks(prev => ({
        ...prev,
        galleryImages: {
          ...prev.galleryImages,
          [index]: objectUrl
        }
      }));
    } else {
      setImageLinks(prev => ({
        ...prev,
        [key]: objectUrl
      }));
    }

    // Store the file for later processing
    setUploadedFiles(prev => ({
      ...prev,
      [key]: file
    }));

    toast({
      title: "Image Uploaded",
      description: `${file.name} has been uploaded successfully`,
    });
  };

  const handleRemoveImage = (key: string) => {
    // Revoke object URL to prevent memory leaks
    if (key.startsWith('gallery-')) {
      const index = parseInt(key.split('-')[1]);
      const currentUrl = imageLinks.galleryImages[index];
      if (currentUrl && currentUrl.startsWith('blob:')) {
        URL.revokeObjectURL(currentUrl);
      }
      setImageLinks(prev => ({
        ...prev,
        galleryImages: {
          ...prev.galleryImages,
          [index]: ''
        }
      }));
    } else {
      const currentUrl = imageLinks[key as keyof typeof imageLinks];
      if (typeof currentUrl === 'string' && currentUrl.startsWith('blob:')) {
        URL.revokeObjectURL(currentUrl);
      }
      setImageLinks(prev => ({
        ...prev,
        [key]: ''
      }));
    }

    // Remove from uploaded files
    setUploadedFiles(prev => ({
      ...prev,
      [key]: null
    }));
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
      description: "All image changes have been saved successfully",
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

  const ImageUploadField = ({ 
    label, 
    currentImage, 
    onUpload, 
    onRemove, 
    uploadKey 
  }: {
    label: string;
    currentImage: string;
    onUpload: (file: File) => void;
    onRemove: () => void;
    uploadKey: string;
  }) => (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex items-center gap-2">
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) onUpload(file);
          }}
          className="flex-1"
        />
        {currentImage && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onRemove}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      {currentImage && (
        <div className="mt-2">
          <img 
            src={currentImage} 
            alt={label}
            className="max-w-xs max-h-32 object-cover rounded border"
          />
        </div>
      )}
    </div>
  );

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
          <p className="text-muted-foreground">Upload and manage all website images</p>
        </div>

        <div className="grid gap-6">
          {/* Main Page Images */}
          <Card>
            <CardHeader>
              <CardTitle>Main Page Images</CardTitle>
              <CardDescription>Hero, About, and Services section images</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ImageUploadField
                label="Hero Section Image"
                currentImage={imageLinks.heroImage}
                onUpload={(file) => handleFileUpload('heroImage', file)}
                onRemove={() => handleRemoveImage('heroImage')}
                uploadKey="heroImage"
              />
              
              <ImageUploadField
                label="About Section Image"
                currentImage={imageLinks.aboutImage}
                onUpload={(file) => handleFileUpload('aboutImage', file)}
                onRemove={() => handleRemoveImage('aboutImage')}
                uploadKey="aboutImage"
              />
              
              <ImageUploadField
                label="Services Section Image"
                currentImage={imageLinks.servicesImage}
                onUpload={(file) => handleFileUpload('servicesImage', file)}
                onRemove={() => handleRemoveImage('servicesImage')}
                uploadKey="servicesImage"
              />
            </CardContent>
          </Card>

          {/* Gallery Images */}
          <Card>
            <CardHeader>
              <CardTitle>Gallery Images</CardTitle>
              <CardDescription>Upload images for the gallery section</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                <ImageUploadField
                  key={index}
                  label={`Gallery Image ${index + 1}`}
                  currentImage={imageLinks.galleryImages[index] || ''}
                  onUpload={(file) => handleFileUpload(`gallery-${index}`, file)}
                  onRemove={() => handleRemoveImage(`gallery-${index}`)}
                  uploadKey={`gallery-${index}`}
                />
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
