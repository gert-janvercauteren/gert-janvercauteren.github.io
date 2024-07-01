import BpkText, {TEXT_STYLES} from "@skyscanner/backpack-web/bpk-component-text";

function Root() {
    return (
        <div className={'main-content'}>
            <BpkText textStyle={TEXT_STYLES.heading1} tagName={'h1'}>Test cases</BpkText>
            <nav>
                <ul>
                    <li><a href={`/#/case/prod`}>Original</a></li>
                    <li>Reference Implementation</li>
                    <ul>
                        <li><a href={`/#/case/6`}>mWeb Hotel</a></li>
                    </ul>
                    <li>mWeb</li>
                    <ul>
                        <li><a href={`/#/case/1`}>mWeb case 1</a></li>
                        <li><a href={`/#/case/2`}>mWeb case 2</a></li>
                        <li><a href={`/#/case/3`}>mWeb case 3</a></li>
                        <li><a href={`/#/case/4`}>mWeb case 4</a></li>
                        <li><a href={`/#/case/5`}>mWeb case 5</a></li>
                    </ul>

                    <li>Desktop</li>
                    <ul>
                        <li><a href={`/#/case/desktop-1`}>Desktop case 1</a></li>
                    </ul>
                </ul>
            </nav>
        </div>
    )
}

export default Root