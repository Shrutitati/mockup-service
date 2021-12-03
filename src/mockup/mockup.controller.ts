/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { LogoutStatus, MockupLogoutModel } from './mockup.logoutmodel';
import { MockupModel, MockupStatus } from './mockup.model';
import { MockupService } from './mockup.service';

@Controller('mockup')
export class MockupController {
   constructor(private mockupService: MockupService) {}
        
    @Get()
    getAllMock():MockupModel[]{
        return this.mockupService.getAllMock();
    }
    
    @Post('/login')
    createMockup(@Body()mockUpModel: MockupModel) : MockupStatus {
        return this.mockupService.createMockup(mockUpModel);
    }

    @Post('/logout')
    logoutMockup(@Body() mockupLogoutModel:MockupLogoutModel):LogoutStatus {
            return this.mockupService.logoutMockup(mockupLogoutModel)
    }
    }

