export interface employeeTest {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  password: string;
  confirmPassword: string;
  hasEmergencyContact: boolean;
  emergencyContactName: string;
  emergencyContactPhone: string;
}

export interface employee {
  id: number;
  fullName: string; //
  position: string;
  salary: number;
  birthDate: Date; //
  attendanceTime: Date;
  joinDateTime: Date;
  isActive: boolean;
  male: boolean;
  female: boolean;
  english: boolean; 
  french: boolean;
  german: boolean;
  phoneNumber: string;
  email: string; //
  notes: string;
  appraisal: boolean;
  departmentId: number;
  profileFile: File;
  profilePath: string;
  nationalId: string; //
  gender: string; //
}
