import CardContact from './components/CardContact'
import ButtonAddContact from './components/ButtonAddContact'
import SearchBar from './components/SearchBar'

export type PageProps = {
	params: { [key: string]: string | string[] | undefined };
	searchParams?: { [key: string]: string | string[] | undefined };
};

export default function Home(props: PageProps) {
  return (
    <>
      <SearchBar />
      <ButtonAddContact />
      <CardContact {...props} />
    </>
  )
}
