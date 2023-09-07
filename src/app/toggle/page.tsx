
"use client"
import Toggle from "@/components/Toggle";
import { useState } from "react";

function TogglePage() {
  const [ isChecked, setIsChecked ] = useState(false)
  return <div style={{ padding: '1rem' }}><Toggle onChange={() => setIsChecked(checked => !checked)} isChecked={isChecked}/></div>
}
export default TogglePage