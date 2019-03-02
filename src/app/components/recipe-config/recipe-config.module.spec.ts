import { RecipeConfigModule } from './recipe-config.module';

describe('RecipeConfigModule', () => {
  let recipeConfigModule: RecipeConfigModule;

  beforeEach(() => {
    recipeConfigModule = new RecipeConfigModule();
  });

  it('should create an instance', () => {
    expect(recipeConfigModule).toBeTruthy();
  });
});
