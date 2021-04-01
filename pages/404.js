import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Custom404() {
  const router = useRouter();
  return(
    <div>
      <h1>404</h1>
      <p>Click <a onClick={() => { router.back() }}>here</a> to go back.</p>
    </div>
  );
}
