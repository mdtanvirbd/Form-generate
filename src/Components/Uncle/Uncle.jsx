
import Cousin from '../Cousin/Cousin';

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cousin name={'Takin'} asset={asset}></Cousin>
                <Cousin name={'Taki'} />
            </section>
        </div>
    );
};

export default Uncle;