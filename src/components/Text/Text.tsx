import {useEditor, useNode} from "@craftjs/core";
import ContentEditable from 'react-contenteditable'
import {useState, useEffect, ChangeEvent} from "react";

interface ITextProps {
    text: string
    fontSize: number
}

export default function Text ({text, fontSize}: ITextProps) {
    const { connectors: {connect, drag}, selected, actions: {setProp} } = useNode((state) => ({
        selected: state.events.selected,
        dragged: state.events.dragged
    }));

    const { enabled } = useEditor((state) => ({
        enabled: state.options.enabled
    }));


    const [editable, setEditable] = useState(false);

    useEffect(() => {
        if (selected) {
            return
        }

        setEditable(false)
    }, [selected])

    function changeEditableMode () {
        if(!enabled) {
            return
        }
        setEditable(true)
    }

    return (
        <div ref={(ref: HTMLDivElement) => connect(drag(ref))}
             onClick={changeEditableMode}
        >
            <ContentEditable
                disabled={!editable}
                html={text}
                onChange={e =>
                    setProp(props =>
                        props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")
                    )
                }
                tagName="p"
                style={{fontSize: `${fontSize}px`}}
            />
        </div>
    )
}

function TextSettings () {
    const { actions: {setProp}, fontSize } = useNode((node) => ({
        fontSize: node.data.props.fontSize
    }));

    return (
        <form className='mt-4'>
            <input
                type="range"
                className='w-full'
                step={1}
                min={7}
                max={50}
                defaultValue={fontSize}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setProp(props => props.fontSize = e.target.value);
                }}
            />
        </form>
    )
}

export const TextDefaultProps = {
    text: 'Hi world!',
    fontsize: 16
}

Text.craft = {
    props: TextDefaultProps,
    related: {
        settings: TextSettings,
    },
};