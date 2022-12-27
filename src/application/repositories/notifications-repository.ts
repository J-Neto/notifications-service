// O Nest.Js trabalha melhor com classes abstratas em termos de inversão de dependência

import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
}
