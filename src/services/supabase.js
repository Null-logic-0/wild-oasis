import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zxaxqoquwvgwljpyvgyv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4YXhxb3F1d3Znd2xqcHl2Z3l2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEwNjc4NDcsImV4cCI6MjA0NjY0Mzg0N30.JuzLtJdJ_2h6Vp13Z5_yICIvmc_PQ0pMM1Q-8RxK4IU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
