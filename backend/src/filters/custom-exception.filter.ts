import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";

@Catch(Error)
export class CustomExceptionFilter implements ExceptionFilter {
    private readonly logger = new Logger(this.constructor.name);

    catch(exception: Error, host: ArgumentsHost): void {
        const context = host.switchToHttp();
        const response = context.getResponse();
        // 클라이언트에게 줄 응답을 조작하기 위한 객체

        this.logger.error(exception.message);
        this.logger.debug('Filter working');
        if (exception instanceof HttpException) {
            response.status(exception.getStatus()).send(exception.message);
        }
    }
}