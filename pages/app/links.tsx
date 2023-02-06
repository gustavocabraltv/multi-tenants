import Form from '@/components/Form'
import Heading1 from '@/components/Heading1'
import Heading2 from '@/components/Heading2'
import Test from '@/components/Test'

const Links = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <Heading1>Gerenciador de Links</Heading1>
                    <Heading2>Gerenciador de Links</Heading2>
                </div>
                <div>
                    <button className=" px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                        Play
                    </button>
                    <button className=" px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                        Play
                    </button>
                </div>
            </div>
            <Form />
        </>
    )
}

export default Links
