import BpkText, {TEXT_STYLES} from "@skyscanner/backpack-web/bpk-component-text";

function Root() {
    return (
        <div className={'main-content'}>
            <BpkText textStyle={TEXT_STYLES.heading1} tagName={'h1'}>Test cases</BpkText>
            <nav>
                <ul>
                    <li><a href={`/case/1`}>Test case 1</a></li>
                    <li><a href={`/case/2`}>Test case 2</a></li>
                    <li><a href={`/case/3`}>Test case 3</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Root