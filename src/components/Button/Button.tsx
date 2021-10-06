import {useEditor, useNode} from "@craftjs/core";
import {useEffect, useState} from "react";
import ContentEditable from "react-contenteditable";

const buttonSizeArray: string[] = ['Small', 'Medium', 'Large']
const colorsArray: string[] = ['bg-red-500', 'bg-blue-500', 'bg-gray-300']
const variantsArray: IVariant[] = [
    {
        title: 'Simple',
        className: ''
    },
    {
        title: 'Disabled',
        className: 'opacity-50 cursor-not-allowed'
    },
    {
        title: 'Pill',
        className: 'rounded-full'
    },
]

interface IButtonProps {
    text: string,
    size?: string
    variant?: string
    color?: string
}

interface IVariant {
    title: string
    className: string
}

export default function Button ({text, size, variant, color}: IButtonProps) {
    const { connectors: {connect, drag}, selected, actions: {setProp} } = useNode((state) => ({
        selected: state.events.selected,
        dragged: state.events.dragged
    }));

    const [editable, setEditable] = useState(false);

    const { enabled } = useEditor((state) => ({
        enabled: state.options.enabled
    }));

    useEffect(() => {
        if (selected) {
            return;
        }

        setEditable(false);
    }, [selected]);


    let padding
    switch (size) {
        case 'Small': padding = '4px 7px'; break;
        case 'Medium': padding = '6px 13px'; break;
        case 'Large': padding = '8px 16px'; break;
        default: padding = '4px 7px';
    }

    function changeEditableMode () {
        if(!enabled) {
            return
        }
        setEditable(true)
    }

    return (
        <button
            ref={(ref: HTMLButtonElement) => connect(drag(ref))}
            className={`${variant} ${color} hover:opacity-80 text-white font-bold py-2 px-4 border border-black rounded w-auto`}
            style={{
                padding: padding
            }}
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
            />
        </button>
    )
}

const ButtonSettings = () => {
    const { actions: {setProp}, props } = useNode((node) => ({
        props: node.data.props
    }));

    return (
        <div>
            <form className='mt-2'>
                <h4 className='font-bold'>Size</h4>
                {
                    buttonSizeArray.map((item, index) => {
                        return (
                            <div className='mt-1' key={`${item}_${index}`}>
                                <input type="radio" id={`${item}_${index}`} name="size"
                                       checked={props.size === item}
                                       onChange={() => setProp((props) => (props.size = item))}
                                />
                                <label className='ml-2' htmlFor={`${item}_${index}`}>{item}</label>
                            </div>
                        )
                    })
                }
            </form>
            <form className='mt-2'>
                <h4 className='font-bold'>Variant</h4>
                {
                    variantsArray.map((item: IVariant, index) => {
                        return (
                            <div className='mt-1' key={`${item.title}_${index}`}>
                                <input type="radio" id={`${item.title}_${index}`} name="variant"
                                       checked={props.variant === item.className}
                                       onChange={() => setProp((props) => (props.variant = item.className))}
                                />
                                <label className='ml-2' htmlFor={`${item.title}_${index}`}>{item.title}</label>
                            </div>
                        )
                    })
                }
            </form>
            <form className='mt-2'>
                <h4 className='font-bold'>Color</h4>
                {
                    colorsArray.map((item, index) => {
                        return (
                            <div className='mt-1' key={`${item}_${index}`}>
                                <input type="radio" id={`${item}_${index}`} name="color"
                                       checked={props.color === item}
                                       onChange={() => setProp((props) => (props.color = item))}
                                />
                                <label className='ml-2 capitalize' htmlFor={`${item}_${index}`}>{item}</label>
                            </div>
                        )
                    })
                }
            </form>
        </div>
    )
}

export const ButtonDefaultProps = {
    size: 'Medium',
    variant: '',
    color: 'bg-blue-500',
    text: 'Click me',
};

Button.craft = {
    props: ButtonDefaultProps,
    related: {
        settings: ButtonSettings,
    },
};