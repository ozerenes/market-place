import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TuiAlertService} from '@taiga-ui/core';

interface Item {
  badge?: number;
  icon: string;
  text: string;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  @Input() activeItemIndex = 1;

  readonly items = [
    {
      text: 'Favorites',
      icon: 'tuiIconHeartLarge',
      badge: 3,
    },
    {
      text: 'Calls',
      icon: 'tuiIconPhoneLarge',
      badge: 1234,
    },
    {
      text: 'Profile',
      icon: 'tuiIconUserLarge',
    },
    {
      text: 'Settings and configuration',
      icon: 'tuiIconSettingsLarge',
      badge: 100,
    },
    {
      text: 'More',
      icon: 'tuiIconMoreHorizontalLarge',
    },
  ];

  constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}

  onClick(item: Item): void {
    item.badge = 0;
    this.alerts.open(this.activeItemIndex, {label: item.text}).subscribe();
  }
}
