import { Blocks } from 'react-loader-spinner';
import s from './loader.module.css';

const Loader = () => {
    return (
        <div className={s.Loader}>
            <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            />
      </div>
    );
}

export default Loader;