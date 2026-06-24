import TourHero from '../components/Tour/TourHero';
import TourPackages from '../components/Tour/TourPackages';
import TourRegistration from '../components/Tour/TourRegistration';
import bottomDivider from '../assets/blog/dvider_20 4 (2).png';

const Tour = () => {
  return (
    <div className="tour-page">
      <TourHero />
      <div style={{ position: 'relative' }}>
        <TourPackages />
        <div style={{
          position: 'absolute',
          bottom: '-1px',
          left: 0,
          width: '100%',
          aspectRatio: '1920 / 153',
          backgroundColor: '#FAF9F6',
          WebkitMaskImage: `url("${bottomDivider}")`,
          maskImage: `url("${bottomDivider}")`,
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          zIndex: 10,
          pointerEvents: 'none'
        }} />
      </div>
      <TourRegistration />
    </div>
  );
};

export default Tour;

