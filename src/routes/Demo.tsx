import BpkText, {TEXT_STYLES} from "@skyscanner/backpack-web/bpk-component-text";
import {BpkButtonV2, BUTTON_TYPES} from "@skyscanner/backpack-web/bpk-component-button";
import BpkInput, {INPUT_TYPES} from '@skyscanner/backpack-web/bpk-component-input';
import BpkLink from '@skyscanner/backpack-web/bpk-component-link';
import BpkFieldset from '@skyscanner/backpack-web/bpk-component-fieldset';
import BpkRadio from '@skyscanner/backpack-web/bpk-component-radio';
import BpkSelect from '@skyscanner/backpack-web/bpk-component-select';
import BpkDialog from '@skyscanner/backpack-web/bpk-component-dialog';

import {ChangeEvent, useState} from "react";

function Demo() {

    const [office, setOfficeValue] = useState('');
    const [name, setName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div id="dialog-container">
            <div className={'desktop-container'} id="pagewrap">
                <BpkText textStyle={TEXT_STYLES.heading1} tagName={'h1'}>Keyboard navigation</BpkText>
                <BpkText textStyle={TEXT_STYLES.subheading} tagName={'h2'}>Obstacle course</BpkText>

                <section>
                    <BpkText textStyle={TEXT_STYLES.heading2} tagName={'h2'}>Basics</BpkText>
                    <div>
                        See our amazing deals on <BpkLink href="http://www.skyscanner.net/"
                                                          blank>Skyscanner.net</BpkLink>
                    </div>
                    <BpkButtonV2 type={BUTTON_TYPES.secondary}
                                 onClick={() => setIsModalOpen(true)}>
                        More information
                    </BpkButtonV2>

                    <BpkDialog
                        ariaLabel="More information about Skyscanner"
                        closeLabel="Close dialog"
                        id="more-info-dialog"
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        getApplicationElement={() => document.getElementById('pagewrap')}
                        renderTarget={() => document.getElementById('dialog-container')}
                    >
                        <BpkText textStyle={TEXT_STYLES.heading2} tagName={'h2'}>More information</BpkText>
                        <BpkText>
                            Skyscanner is a leading global travel search site, providing instant online comparisons for millions of flights, as well as car hire and hotels.
                        </BpkText>
                        <div className="dialog-buttons">
                            <BpkButtonV2 type={BUTTON_TYPES.primary}
                                         onClick={() => setIsModalOpen(false)}>
                                Visit Skyscanner
                            </BpkButtonV2>
                            <BpkButtonV2 type={BUTTON_TYPES.secondary}
                                         onClick={() => setIsModalOpen(false)}>
                                Close
                            </BpkButtonV2>
                        </div>
                    </BpkDialog>
                </section>

                <section>
                    <BpkText textStyle={TEXT_STYLES.heading2} tagName={'h2'}>Form controls</BpkText>
                    <form>
                        <BpkFieldset
                            label="First name"
                            validationMessage="Please enter a name"
                        >
                            <BpkInput
                                id="firstName"
                                type={INPUT_TYPES.text}
                                name="firstName"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </BpkFieldset>

                        <BpkFieldset
                            label="Teams"
                        >
                            <BpkSelect
                                id="teams"
                                name="teams"
                                defaultValue="all"
                            >
                                <option value="all">All teams</option>
                                <option value="business">Business</option>
                                <option value="design">Design</option>
                                <option value="engineering">Engineering</option>
                                <option value="graduate">Graduate</option>
                                <option value="intern">Intern</option>
                                <option value="marketing">Marketing</option>
                                <option value="product">Product</option>
                            </BpkSelect>
                        </BpkFieldset>

                        <BpkFieldset
                            label="Office location"
                        >
                            <div id="office_locations">
                                {['Barcelona', 'Edinburgh', 'Glasgow', 'Gurugram (Delhi NCR)', 'London', 'Miami', 'Shenzhen', 'Singapore', 'Tokyo'].map((officeLocation) => (
                                    <div>
                                        <BpkRadio
                                            id={officeLocation}
                                            name='group_example'
                                            label={officeLocation}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                setOfficeValue(e.target.value);
                                            }}
                                            value={officeLocation}
                                            checked={office === officeLocation}
                                        />
                                    </div>
                                ))}
                            </div>
                        </BpkFieldset>


                    </form>
                </section>
            </div>
        </div>
    )
}

export default Demo