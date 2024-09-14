import { IsNotEmpty, Matches } from 'class-validator';

export class LoginDto {
    @IsNotEmpty()
    @Matches(
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
        { message: 'Please enter a valid email address' }
    )
    readonly username: string;

    @IsNotEmpty()
    @Matches(/^.{8,20}$/, { message: 'Password must be between 8 and 20 characters long' }) // Length check
    @Matches(/(?=.*[a-zA-Z])/, { message: 'Password must contain at least one letter (a-z or A-Z)' }) // At least one letter
    @Matches(/(?=.*[0-9])/, { message: 'Password must contain at least one number (0-9)' }) // At least one number
    @Matches(/(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])/, { message: 'Password must contain at least one special character (@, !, #, $, etc.)' }) // At least one special character
    @Matches(/^[a-zA-Z0-9$`~!@$!%*#^?&\\(\\)\-_=+]+$/, { message: 'Password can only contain letters, numbers, and special characters ($`~!@$!%*#^?&\\(\\)\-_=+)' }) // Only allowed characters
    readonly password: string;
}
