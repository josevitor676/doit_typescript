import { 
    FormControl, 
    FormErrorMessage, 
    FormLabel, 
    Input as ChakraInput, 
    InputProps as ChakraInputProps, 
    InputLeftElement, 
    InputGroup 
} from "@chakra-ui/react";


import { useState, useEffect, useCallback, useRef } from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons/lib";


interface InputProps extends ChakraInputProps {
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

export const Input = ({name, error = null, icon: Icon, label, ...rest}: InputProps) => {

    const [variation, setVariation] = useState('default');

    const inputRef = useRef<HTMLInputElement>(null);

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
        if(inputRef.current?.value && !error) {
            return setVariation("filled")
        }
    }, [error])


    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel>{label}</FormLabel> }

            <InputGroup flexDirection="column">
                {Icon && 
                    <InputLeftElement color={inputVariation[variation]} mt="2.2">
                        <Icon/>
                    </InputLeftElement>
                }      
                <ChakraInput 
                name={name} 
                bg="gray.50" 
                color={inputVariation[variation]}
                borderColor={inputVariation[variation]}
                onFocus={handleInputFocus}
                onBlurCapture={handleInputBlur}
                variant="outline" 
                _hover={{bgColor: "gray.100"}}
                _placeholder={{color: "gray.300"}}
                size="lg"
                h="45px"
                {...rest}/>

                {!!error && <FormErrorMessage>Erro</FormErrorMessage>}
            </InputGroup>
        </FormControl>
    )
}