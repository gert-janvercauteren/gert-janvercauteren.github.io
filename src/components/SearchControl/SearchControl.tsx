
import STYLES from './SearchControl.scss';
import {cssModules} from '@skyscanner/backpack-web/bpk-react-utils';
import { withButtonAlignment, withRtlSupport } from '@skyscanner/backpack-web/bpk-component-icon';
import SearchIcon from '@skyscanner/backpack-web/bpk-component-icon/sm/search';
import { BpkButtonV2, BUTTON_TYPES } from '@skyscanner/backpack-web/bpk-component-button';

const AlignedSearchIcon = withButtonAlignment(withRtlSupport(SearchIcon));

const getClassName = cssModules(STYLES);

function SearchControl() {
    return (
        <div className={getClassName('SearchControl')}>
            <div className={getClassName('SearchControl__Container')}>
                <div className={getClassName('SearchControl__SearchButton')}>
                    <BpkButtonV2 iconOnly type={BUTTON_TYPES.featured}>
                        <AlignedSearchIcon/>
                        <span className="visually-hidden">Search</span>
                    </BpkButtonV2>
                </div>
                <button className={getClassName('SearchControl__SearchSummary')}>
                    London (Any) - Barcelona (Any) 1 Adult, Economy
                </button>
            </div>
        </div>
    )
}

export default SearchControl;