import { createClient } from '@supabase/supabase-js'
import Constants from 'expo-constants';

export const supabase = createClient(
  'https://xyzcompany.supabase.co', 'public-anon-key')