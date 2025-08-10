import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const CONTENT_FILE = path.join(process.cwd(), 'data', 'content.json')

// Ensure data directory exists
const ensureDataDir = () => {
  const dataDir = path.dirname(CONTENT_FILE)
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

export async function GET() {
  try {
    ensureDataDir()
    
    if (fs.existsSync(CONTENT_FILE)) {
      const content = fs.readFileSync(CONTENT_FILE, 'utf8')
      return NextResponse.json(JSON.parse(content))
    }
    
    // Return default content if file doesn't exist
    return NextResponse.json({})
  } catch (error) {
    console.error('Error reading content:', error)
    return NextResponse.json({ error: 'Failed to read content' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const content = await request.json()
    
    ensureDataDir()
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2))
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving content:', error)
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 })
  }
}