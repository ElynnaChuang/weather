import { CenterLayout } from '@/layouts';
import { CitiesList, Title } from '@/components';

const CitiesPage = () => {
  return (
    <CenterLayout>
      <Title title='Weather' subtitle='~ Choose the city in the list ~' />
      <CitiesList />
    </CenterLayout>
  );
};

export default CitiesPage;
