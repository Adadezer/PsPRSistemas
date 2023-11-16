import { Pagination } from '@/components/Pagination'
import CardContact from './components/CardContact'
import ButtonAddContact from './components/ButtonAddContact'
import SearchBar from './components/SearchBar'

export default function Home() {
  return (
    <>
      <SearchBar />
      <ButtonAddContact />
      <CardContact />
      <Pagination />
    </>
  )
}
