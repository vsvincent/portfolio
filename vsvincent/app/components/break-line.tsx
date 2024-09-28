type BreakLineProps = {
    fadeLeft?: boolean;
};

const BreakLine = ({ fadeLeft }: BreakLineProps) => (
    <div
        className={`hidden w-screen h-px animate-glow md:block ${
            fadeLeft ? "animate-fade-left bg-gradient-to-l" : "animate-fade-right bg-gradient-to-r"
        } from-zinc-300/0 via-zinc-300/50 to-zinc-300/0`}
    />
);

export default BreakLine;
