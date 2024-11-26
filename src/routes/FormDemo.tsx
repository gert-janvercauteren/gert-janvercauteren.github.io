import React, {useState} from "react";
import BpkText, {TEXT_STYLES} from "@skyscanner/backpack-web/bpk-component-text";
import BpkInput, { INPUT_TYPES, CLEAR_BUTTON_MODES } from '@skyscanner/backpack-web/bpk-component-input';
import BpkLabel from '@skyscanner/backpack-web/bpk-component-label';


function FormDemo() {

    const [pickUpLocation, setPickUpLocation] = useState('');
    const [dropOffLocation, setDropOffLocation] = useState('');

    const [pickUpLocationInvisible, setPickUpLocationInvisible] = useState('');
    const [dropOffLocationInvisible, setDropOffLocationInvisible] = useState('');

    return (
        <div className='main-content'>
            <BpkText textStyle={TEXT_STYLES.heading1} tagName='h1'>Form demo</BpkText>
            <BpkText textStyle={TEXT_STYLES.heading2} tagName='h2'>Visible labels</BpkText>
            <form>
                <BpkLabel htmlFor="pickup">Pick-up location</BpkLabel>
                <BpkInput
                    id="pickup"
                    type={INPUT_TYPES.text}
                    name="pickup"
                    value={pickUpLocation}
                    onChange={(e) => setPickUpLocation(e.target.value)}
                    placeholder="City, airport or station"
                    clearButtonMode={CLEAR_BUTTON_MODES.never}
                    clearButtonLabel="Clear"
                    onClear={() => console.log('input cleared!')}
                />

                <BpkLabel htmlFor="dropoff">Drop-off location</BpkLabel>
                <BpkInput
                    id="dropoff"
                    type={INPUT_TYPES.text}
                    name="dropoff"
                    value={dropOffLocation}
                    onChange={(e) => setDropOffLocation(e.target.value)}
                    placeholder="City, airport or station"
                    clearButtonMode={CLEAR_BUTTON_MODES.never}
                    clearButtonLabel="Clear"
                    onClear={() => console.log('input cleared!')}
                />
            </form>

            <BpkText textStyle={TEXT_STYLES.heading2} tagName='h2'>No visible labels</BpkText>
            <form>
                <BpkInput
                    aria-label="Pick-up location"
                    id="pickupInvisible"
                    type={INPUT_TYPES.text}
                    name="pickup"
                    value={pickUpLocationInvisible}
                    onChange={(e) => setPickUpLocationInvisible(e.target.value)}
                    placeholder="City, airport or station"
                    clearButtonMode={CLEAR_BUTTON_MODES.never}
                    clearButtonLabel="Clear"
                    onClear={() => console.log('input cleared!')}
                />

                <BpkInput
                    aria-label="Drop-off location"
                    id="dropoffInvisible"
                    type={INPUT_TYPES.text}
                    name="dropoff"
                    value={dropOffLocationInvisible}
                    onChange={(e) => setDropOffLocationInvisible(e.target.value)}
                    placeholder="City, airport or station"
                    clearButtonMode={CLEAR_BUTTON_MODES.never}
                    clearButtonLabel="Clear"
                    onClear={() => console.log('input cleared!')}
                />
            </form>

        </div>
    )
}

export default FormDemo;