import { DatePickerDemo } from '@/components/ShadcnElements/Datepicker'
import { PopoverDemo } from '@/components/ShadcnElements/Popover'
import { Calendar } from '@/components/ui/calendar'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      Hello
      <PopoverDemo/>
      <DatePickerDemo/>
    </div>
  )
}
