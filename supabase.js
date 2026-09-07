
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
const supabaseUrl = 'https://xqjmupgurojbywwgdguc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhxam11cGd1cm9qYnl3d2dkZ3VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg3OTU3NzAsImV4cCI6MjEwNDM3MTc3MH0.99eMhenq6YeeE4TkOHK9F_xtTTVWDa1Nl_lmaFt5cnU'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase