import React, {useEffect} from 'react';
import Toolbox from "./components/Toolbox";
import SettingsPanel from "./components/SettingsPanel";
import Topbar from "./components/Topbar";
import {Editor, Frame, Element} from "@craftjs/core";
import Button from "./components/Button";
import Container from "./components/Container";
import Text from "./components/Text"
import Row from "./components/Row";
import Column from "./components/Column";
import {onDragStart} from "./helpers/dragHelper";

function App() {
    useEffect(() => {
        document.addEventListener('dragstart', onDragStart);
        return () => {
            document.removeEventListener('dragstart', onDragStart)
        }
    }, [])

    return (
        <div className="app w-full">
            <div className='p-12 mx-auto my-0 wrapper'>
                <h1 className='text-center text-2xl uppercase'>React page builder</h1>
                <Editor resolver={{Text, Button, Container, Row, Column}}>
                    <div className='mt-5'>
                        <Topbar/>
                        <div className='flex justify-between mt-5'>
                            <Frame>
                                <Element is={Container} background='bg-gray-100' padding={1} marginRight={10} canvas>
                                    <Button text='Click me!' size='Medium' />
                                    <Element is={Container} padding={1} marginTop={20} marginBottom={20} canvas>
                                        <Text text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' fontSize={14} />
                                    </Element>
                                    <Element is={Container} padding={1} marginTop={20} marginBottom={20} canvas>
                                        <Element is={Row} canvas>
                                            <Element is={Column} width={200} canvas>
                                                <Text text='Text inside column' fontSize={20} />
                                            </Element>
                                            <Element is={Column} width={150} canvas>
                                                <Text text=':)' fontSize={20} />
                                            </Element>
                                        </Element>
                                    </Element>
                                </Element>
                            </Frame>
                            <div>
                                <Toolbox/>
                                <SettingsPanel/>
                            </div>
                        </div>
                    </div>
                </Editor>
            </div>
        </div>
    );
}

export default App;
