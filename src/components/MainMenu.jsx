import React from "react";
import {
    ClockCircleOutlined,
    ReloadOutlined,
    UserOutlined,
} from "@ant-design/icons";
import ButtonCard from "./ButtonCard";

export default function MainMenu() {
    return (
        <div className="flex flex-col gap-4 mt-16">
            <ButtonCard
                link="/daily"
                icon={
                    <ClockCircleOutlined className="text-5xl text-light-blue-but" />
                }
                title="Daily"
                description="Devine la personne du jour."
            />
            <ButtonCard
                link="/unlimited"
                icon={
                    <ReloadOutlined className="text-5xl text-light-blue-but" />
                }
                title="Unlimited"
                description="Joue sans aucune limite."
            />
            <ButtonCard
                link="/the-face"
                icon={<UserOutlined className="text-5xl text-light-blue-but" />}
                title="The Face"
                description="Trouve avec l'avatar."
            />
        </div>
    );
}
