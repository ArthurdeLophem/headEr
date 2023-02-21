import { Link } from 'react-router-dom';

export default function Home() {
    return <>
        <Link className="primaryBtn" to="/config">configure your headphones</Link>
    </>
}