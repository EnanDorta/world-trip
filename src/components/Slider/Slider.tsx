import { ReactNode } from 'react';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

const Slide = ({ settings, children }: SliderProps) => {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  );
};

export default Slide;
