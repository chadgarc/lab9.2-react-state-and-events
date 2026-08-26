
import React from 'react';
import type { TextInputProps } from '../../Types';

/**
 * TextInput Component
 * -------------------
 * Renders a multiline text input (textarea) and notifies the parent component
 * whenever the user types. This component does NOT store or manage the text
 * internally; instead, it relies on a callback function provided by the parent.
 *
 * Props:
 * @param {function} onTextChange
 *   Callback invoked every time the user types in the textarea.
 *   Receives the updated text as a string. This allows the parent component
 *   (CharacterCounter) to manage the text state and compute statistics.
 *
 * @param {string} [placeholder='Start typing...']
 *   Optional placeholder text displayed when the textarea is empty.
 *
 * @param {string} [initialValue='']
 *   Optional initial value for the textarea. This is only applied once
 *   because the component uses `defaultValue`, making the textarea uncontrolled.
 *
 * Component Behavior:
 * -------------------
 * - The textarea is an uncontrolled input because it uses `defaultValue`
 *   instead of `value`. This means React does not control its content after
 *   the initial render.
 *
 * - Every keystroke triggers the `onChange` event, which extracts the current
 *   value from the event object and passes it to `onTextChange`.
 *
 * - The parent component decides what to do with the text (store it, limit it,
 *   compute statistics, etc.). TextInput simply forwards the user input.
 *
 * Usage Example:
 * --------------
 * <TextInput
 *   onTextChange={(text) => setInputValue(text)}
 *   placeholder="Write your article..."
 * />
 */

export const TextInput: React.FC<TextInputProps> = ({
    onTextChange,
    placeholder = 'Start typing...',
    initialValue = ''
    }) => {
    return (
        <div className="w-full">
        <textarea
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder={placeholder}
            defaultValue={initialValue}
            // On change the onChange method will receive the value of the event listener
            onChange={(e) => onTextChange(e.target.value)}
            rows={6}
        />
        </div>
    );
};