import { MoneyService } from './money.service';

describe('MoneyService', () => {
  let service: MoneyService;

  beforeEach(() => {
    service = new MoneyService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
