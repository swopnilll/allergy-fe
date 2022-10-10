import { useEffect, useState } from "react";

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import useAuth from "../hooks/useAuth";

import { getAllAllergiesForUser } from "../services/allergyService";

import myImage from "../images/allergy.jpeg"
import { Button } from "react-bootstrap";


export const AllergiesPageWrapper = () => {

    const { authenticatedUser } = useAuth();
    console.log(authenticatedUser);

    const [allergies, setAllergies] = useState<any>({});
    const [user, setUserDetail] = useState(authenticatedUser)

    useEffect(() => {
        let isMounted = true;
        const getAllergies = async () => {

            try {
                const apiResponse = await getAllAllergiesForUser(user.id, user.accessToken);
                console.log(apiResponse);

                isMounted && setAllergies(apiResponse?.data?.data);
            } catch (error) {
                console.log(error);
            }

        }

        getAllergies();

        return () => {
            isMounted = false;
        }
    }, [user])

    return (
        <div className="allergy-page-wrapper">
            <div className="user-details-wrapper">
                <div className="user-detail">
                    <div className="user-detail-header">User Info</div>
                    <div className="user-name">Name: {user.name}</div>
                    <div className="allergy-count">Number of Allergies: {allergies?.length || "-"}</div>
                </div>
            </div>

            <div className="allergy-cards-wrapper">
                {
                    allergies?.length
                        ? (allergies.map((allergy: any, index: number) =>
                            <div className="allergy-card">
                                <div className="allery-image">
                                    <img src={myImage} alt="register-page-landing"></img>
                                </div>

                                <div className="allergy-info name">
                                    Name:  {allergy?.name}
                                </div>
                                <div className="allergy-info severity">
                                    Severity: {allergy.severity}
                                </div>
                                <div className="allergy-info isHighRisk">
                                    Status: {allergy.is_high_risk ? "High Risk" : "Low Risk"}
                                </div>
                                <div className="allergy-info symtoms">{allergy.symtoms}</div>
                            </div>))
                        : <p>No Allergies found</p>
                }
            </div>

            <div className="add-allergy-button">
                <Button variant="danger" size="lg">Add Allergies</Button>{' '}
            </div>
        </div >
    )
}