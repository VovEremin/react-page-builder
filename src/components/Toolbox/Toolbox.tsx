import {useEditor} from "@craftjs/core";
import Button from '../Button'
import Text from '../Text'
import Container from "../Container";
import {Element} from "@craftjs/core";
import Column from "../Column";
import Row from "../Row";

export default function Toolbox () {
    const { connectors } = useEditor();

    return (
        <div className='p-2 w-60 gap-1 flex flex-col p-4 bg-gray-200 rounded-md'>
            <h3 className='uppercase mb-3 text-center'>Drag to add</h3>
            <div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full"
                    ref={(ref: HTMLButtonElement) => connectors.create(ref, <Element is={Container} padding={0.5} marginTop={2} canvas />)}
                >
                    Container
                </button>
            </div>
            <div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full"
                    ref={(ref: HTMLButtonElement) => connectors.create(ref, <Element is={Row} padding={0.5} canvas />)}
                >
                    Row
                </button>
            </div>
            <div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full"
                    ref={(ref: HTMLButtonElement) => connectors.create(ref, <Element is={Column} padding={0.5} width={100} canvas />)}
                >
                    Column
                </button>
            </div>
            <div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full"
                    ref={(ref: HTMLButtonElement) => connectors.create(ref, <Button text="Click me" color='bg-blue-500' size='Medium' />)}
                >
                    Button
                </button>
            </div>
            <div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full"
                    ref={(ref: HTMLButtonElement) => connectors.create(ref, <Text text="Hi world!" fontSize={14} />)}
                >
                    Text
                </button>
            </div>
        </div>
    )
}