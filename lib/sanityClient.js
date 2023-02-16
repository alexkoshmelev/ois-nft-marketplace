import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'gm3t1jkg',
  dataset: 'production',
  apiVersion: '2023-02-16',
  token:
    'skQXU2bVZz63pZ37PUCupTVKRRCkmHGLRnasKhIr4HOsBxHZ4RQo46SzfhkOZdNhPDvztrvUwD3zJuZi3n5OjyNp9YujIq3u22CGi9cPcra0zmV9wZs5iqifxCVtGPH8lHVzBHHE4P6CBDuhQyeyLNtXpxVFRYHTIO3PdQmz7k3iJM6QLUfN',
  useCdn: false,
})