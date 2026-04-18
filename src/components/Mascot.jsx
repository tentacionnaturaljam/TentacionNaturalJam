import mascotaImg from '../assets/mascota.jpeg';

const Mascot = ({ size = 180 }) => (
  <img
    src={mascotaImg}
    alt="El Borojito, nuestra mascota"
    width={size}
    height={size}
    style={{ objectFit: 'contain', borderRadius: '50%' }}
  />
);

export default Mascot;
