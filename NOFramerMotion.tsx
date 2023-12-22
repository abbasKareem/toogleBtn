import './index.css'


const NoFramerMotionBtn = ({ checked, label }: { checked: boolean; label: string }) => {
    return (
        <div data-checked={checked} className="checkedBtn-wrapper">
            <p>{label}</p>
            <div className="animation-wrapper">
                <div className="squre" />
                <div className="icon-wrapper">
                    <Icon icon="check" className={`w-10 h-10 fill-yellow-500`} />
                </div>
            </div>
        </div>
    );
};
