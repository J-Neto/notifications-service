import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  // Salvando os dados em memória
  notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
