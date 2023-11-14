import CardContact from './components/CardContact'
import CrudButtons from './components/CrudButtons'
import SearchBar from './components/SearchBar'

export default function Home() {
  return (
    <>
      <SearchBar />
      <CrudButtons />
      <CardContact />
    </>
  )
}
