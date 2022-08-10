import { 
    FormControl, 
    FormErrorMessage, 
    FormLabel, 
    Textarea as ChakraTextarea, 
    TextareaProps as ChakraTextareaProps, 
    InputLeftElement, 
    InputGroup, 
    forwardRef
} from "@chakra-ui/react";


import { useState, useEffect, useCallback, useRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons/lib";


interface InputProps extends ChakraTextareaProps {
    name: string;
    label?: string;
    error?: FieldError | null;
    icon?: IconType;
}

type inputVariationProps = {
    [key: string]: string;
}

const inputVariation: inputVariationProps = {
    error: "red.500",
    default: "gray.200",
    focus: "purple.800",
    filled: "green.500",
}

const TextAreaBase: ForwardRefRenderFunction<HTMLTextAreaElement, InputProps> = ({name, error = null, icon: Icon, label, ...rest}, ref) => {

    const [variation, setVariation] = useState('default');
    const [value, setValue] = useState("");

    useEffect(() => {
        if(error) {
            return setVariation("error")
        }
    }, [error])

    const handleInputFocus = useCallback(() => {
        if(!error) {
            setVariation("focus")
        }
    }, [error])

    const handleInputBlur = useCallback(() => {
        if(value.length > 1 && !error) {
            return setVariation("filled")
        }
    }, [error, value])


    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel color="gray.400">{label}</FormLabel> }

            <InputGroup flexDirection="column">
                {Icon && 
                    <InputLeftElement color={inputVariation[variation]} mt="2.2">
                        <Icon/>
                    </InputLeftElement>
                }      
                <ChakraTextarea 
                id={name}
                name={name} 
                onChangeCapture={e => setValue(e.currentTarget.value)}
                color={inputVariation[variation]}
                borderColor={inputVariation[variation]}
                onFocus={handleInputFocus}
                onBlurCapture={handleInputBlur}
                focusBorderColor="purple.500"
                bg="gray.50" 
                variant="outline" 
                _hover={{bgColor: "gray.100"}}
                _placeholder={{color: "gray.300"}}
                _focus={{bg: "gray.100"}}
                size="lg"
                h="45px"
                ref={ref}
                {...rest}/>

                {!!error && <FormErrorMessage color="red.500">{error.message}</FormErrorMessage>}
            </InputGroup>
        </FormControl>
    )
}

export const TextArea = forwardRef(TextAreaBase);