import { Header } from '../components/Header';
import Country from '../components/Country';

interface ContinentProps {
  country: string;
}

const Continent = ({ country }: ContinentProps) => {
  return (
    <>
      <Header.Root>
        <Header.BackButton pathImg="images/backButton.svg" altImg="Botão de voltar" />
        <Header.Image pathImg="images/headerImg.svg" altImg="Logo" />
      </Header.Root>
      <Country country={country} />
    </>
  );
};

export default Continent;
