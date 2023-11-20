import CardContact from './components/CardContact'
import SearchBar from './components/SearchBar'

export interface PageProps {
	params: { [key: string]: string | string[] | undefined };
	searchParams?: { [key: string]: string | string[] | undefined };
};

export default function Home(props: PageProps) {
  return (
    <>
      <SearchBar />
      <CardContact {...props} />
    </>
  )
}
