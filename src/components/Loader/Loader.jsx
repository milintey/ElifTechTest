import { OverlayModal } from './Loader.styled';
import { Circles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <OverlayModal>
      <Circles
        height="80"
        width="80"
        color="orangered"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </OverlayModal>
  );
};
