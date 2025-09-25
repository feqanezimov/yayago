// components/layout/HeaderSearchBar.tsx
'use client';
export default function HeaderSearchBar() { /* ... */ }

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, ChevronDown } from 'lucide-react';

export function HeaderSearchBar() {
  const [selectedModel, setSelectedModel] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Searching with:', { selectedModel, searchTerm });
    // Burada axtarış məntiqini tətbiq edə bilərsiniz
  };

  return (
    <div className="hidden lg:flex items-center bg-gray-800 rounded-full px-2 py-1 space-x-1">
      {/* Models Select */}
      <Select value={selectedModel} onValueChange={setSelectedModel}>
        <SelectTrigger
          className="w-[120px] border-none shadow-none focus:ring-0 bg-gray-700 text-white"
          aria-label="Select car model"
        >
          <SelectValue placeholder="Models" />
        </SelectTrigger>
        <SelectContent className="bg-gray-800 text-white border-gray-700">
          <SelectItem value="all">All Models</SelectItem>
          <SelectItem value="economy">Economy</SelectItem>
          <SelectItem value="luxury">Luxury</SelectItem>
          <SelectItem value="suv">SUV</SelectItem>
          <SelectItem value="sports">Sports</SelectItem>
        </SelectContent>
      </Select>

      {/* Separator */}
      <div className="w-px h-6 bg-white/20" />

      {/* Search Input */}
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 border-none shadow-none focus-visible:ring-0 bg-gray-700 text-white placeholder:text-gray-400" // Dəyişikliklər burada edildi
      />

      {/* Search Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={handleSearch}
        className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2" // Dəyişikliklər burada edildi
      >
        <Search className="h-4 w-4" />
      </Button>
    </div>
  );
}
