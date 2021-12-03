/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { LogoutStatus, MockupLogoutModel } from './mockup.logoutmodel';
import { MockupModel, MockupStatus} from './mockup.model';


@Injectable()
export class MockupService {
    private mockup: MockupModel[] = [];
    private usertrack: MockupLogoutModel[]=[];

    getAllMock(): MockupModel[] {
        return this.mockup;
    }

    createMockup(mockUpModel:MockupModel): MockupStatus {
        // eslint-disable-next-line prefer-const
        let date= new Date();
        mockUpModel.loginDate=date;
        const mockupStatus= new MockupStatus('SUCCESS', mockUpModel)
        return mockupStatus;
            
}

    logoutMockup(mockupLogoutModel:MockupLogoutModel):LogoutStatus{

        const date= new Date();
        mockupLogoutModel.logoutDate=date;
        const logoutStatus= new LogoutStatus(200, date, '/logout','User logged out successfully', 'LOGGED_OUT');
        return logoutStatus
    
    }
}