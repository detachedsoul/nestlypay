import SettingsLayoutHeader from "@/components/User/SettingsLayoutHeader";

const SettingsLayout = ({children}: {children: React.ReactNode}): JSX.Element => {
    return (
        <section className="grid gap-10">
            <SettingsLayoutHeader />

            {children}
        </section>
    );
};

export default SettingsLayout;
